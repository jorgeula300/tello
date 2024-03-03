/*
  Warnings:

  - You are about to drop the `revocatoriasP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "revocatoriasP";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RevocatoriasP" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pais" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "fechas" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Noticias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "urlNoticia" TEXT NOT NULL,
    "contenido" TEXT NOT NULL
);
