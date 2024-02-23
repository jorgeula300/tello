/*
  Warnings:

  - You are about to drop the column `descricion` on the `Biblioteca` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Normas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "urlDoc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Historia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "contenido" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PrincipalesA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "contenido" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "revocatoriasP" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pais" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "fechas" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Biblioteca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreD" TEXT NOT NULL,
    "imgLink" TEXT NOT NULL,
    "docLink" TEXT NOT NULL
);
INSERT INTO "new_Biblioteca" ("docLink", "id", "imgLink", "nombreD") SELECT "docLink", "id", "imgLink", "nombreD" FROM "Biblioteca";
DROP TABLE "Biblioteca";
ALTER TABLE "new_Biblioteca" RENAME TO "Biblioteca";
CREATE UNIQUE INDEX "Biblioteca_nombreD_key" ON "Biblioteca"("nombreD");
CREATE UNIQUE INDEX "Biblioteca_imgLink_key" ON "Biblioteca"("imgLink");
CREATE UNIQUE INDEX "Biblioteca_docLink_key" ON "Biblioteca"("docLink");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
