import type { Request, Response } from "express";
import {
  addGalleryImageSchema,
  createAlbumSchema,
  galleryQuerySchema,
  updateAlbumSchema,
  updateGalleryImageSchema,
} from "./gallery.dto.js";
import {
  addGalleryImage,
  createAlbum,
  deleteAlbum,
  deleteGalleryImage,
  getAlbumById,
  getAlbums,
  updateAlbum,
  updateGalleryImage,
  uploadAlbumCover,
} from "./gallery.service.js";

function getParam(value: string | string[] | undefined): string | null {
  if (typeof value === "string" && value.length > 0) {
    return value;
  }

  return null;
}

function getErrorStatus(message: string) {
  if (
    message === "Gallery album not found" ||
    message === "Gallery image not found"
  ) {
    return 404;
  }

  if (message.includes("do not have permission")) {
    return 403;
  }

  return 400;
}

export async function createAlbumController(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const input = createAlbumSchema.parse(req.body);

    const album = await createAlbum(req.user.id, input);

    return res.status(201).json({
      success: true,
      message: "Gallery album created successfully",
      data: album,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to create gallery album";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function getAlbumsController(req: Request, res: Response) {
  try {
    const filters = galleryQuerySchema.parse(req.query);

    const albums = await getAlbums({
      visibility: filters.visibility ?? "PUBLIC",
    });

    return res.status(200).json({
      success: true,
      data: albums,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch gallery albums";

    return res.status(400).json({
      success: false,
      message,
    });
  }
}

export async function getManagementAlbumsController(
  req: Request,
  res: Response,
) {
  try {
    const filters = galleryQuerySchema.parse(req.query);

    const albums = await getAlbums({
      visibility: filters.visibility,
    });

    return res.status(200).json({
      success: true,
      message: "Gallery management albums retrieved successfully",
      data: albums,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch gallery management albums";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function getAlbumController(req: Request, res: Response) {
  try {
    const albumId = getParam(req.params.albumId);

    if (!albumId) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }

    const album = await getAlbumById(albumId);

    if (album.visibility !== "PUBLIC") {
      return res.status(404).json({
        success: false,
        message: "Gallery album not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: album,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch gallery album";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function getManagementAlbumController(
  req: Request,
  res: Response,
) {
  try {
    const albumId = getParam(req.params.albumId);

    if (!albumId) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }

    const album = await getAlbumById(albumId);

    return res.status(200).json({
      success: true,
      message: "Gallery album retrieved successfully",
      data: album,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch gallery album";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function updateAlbumController(req: Request, res: Response) {
  try {
    const albumId = getParam(req.params.albumId);

    if (!albumId) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const input = updateAlbumSchema.parse(req.body);

    const album = await updateAlbum(req.user.id, albumId, input);

    return res.status(200).json({
      success: true,
      message: "Gallery album updated successfully",
      data: album,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to update gallery album";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function deleteAlbumController(req: Request, res: Response) {
  try {
    const albumId = getParam(req.params.albumId);

    if (!albumId) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const result = await deleteAlbum(req.user.id, albumId);

    return res.status(200).json({
      success: true,
      message: "Gallery album deleted successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to delete gallery album";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function addGalleryImageController(req: Request, res: Response) {
  try {
    const albumId = getParam(req.params.albumId);

    if (!albumId) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const input = addGalleryImageSchema.parse(req.body);

    const image = await addGalleryImage(
      req.user.id,
      albumId,
      input,
      req.file,
    );

    return res.status(201).json({
      success: true,
      message: "Gallery image uploaded successfully",
      data: image,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to upload gallery image";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function updateGalleryImageController(
  req: Request,
  res: Response,
) {
  try {
    const imageId = getParam(req.params.imageId);

    if (!imageId) {
      return res.status(400).json({
        success: false,
        message: "Image ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const input = updateGalleryImageSchema.parse(req.body);

    const image = await updateGalleryImage(
      req.user.id,
      imageId,
      input,
    );

    return res.status(200).json({
      success: true,
      message: "Gallery image updated successfully",
      data: image,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to update gallery image";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function deleteGalleryImageController(
  req: Request,
  res: Response,
) {
  try {
    const imageId = getParam(req.params.imageId);

    if (!imageId) {
      return res.status(400).json({
        success: false,
        message: "Image ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const result = await deleteGalleryImage(
      req.user.id,
      imageId,
    );

    return res.status(200).json({
      success: true,
      message: "Gallery image deleted successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to delete gallery image";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function uploadAlbumCoverController(
  req: Request,
  res: Response,
) {
  try {
    const albumId = getParam(req.params.albumId);

    if (!albumId) {
      return res.status(400).json({
        success: false,
        message: "Album ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Cover image file is required",
      });
    }

    const album = await uploadAlbumCover(
      req.user.id,
      albumId,
      req.file,
    );

    return res.status(200).json({
      success: true,
      message: "Album cover uploaded successfully",
      data: album,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to upload album cover";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}