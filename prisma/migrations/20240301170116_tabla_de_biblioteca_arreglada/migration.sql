/*
  Warnings:

  - You are about to drop the column `docLink` on the `Biblioteca` table. All the data in the column will be lost.
  - You are about to drop the column `imgLink` on the `Biblioteca` table. All the data in the column will be lost.
  - You are about to drop the column `nombreD` on the `Biblioteca` table. All the data in the column will be lost.
  - Added the required column `titulo` to the `Biblioteca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlImagen` to the `Biblioteca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlPdf` to the `Biblioteca` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Biblioteca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "urlPdf" TEXT NOT NULL
);
INSERT INTO "new_Biblioteca" ("id") SELECT "id" FROM "Biblioteca";
DROP TABLE "Biblioteca";
ALTER TABLE "new_Biblioteca" RENAME TO "Biblioteca";
CREATE UNIQUE INDEX "Biblioteca_titulo_key" ON "Biblioteca"("titulo");
CREATE UNIQUE INDEX "Biblioteca_urlImagen_key" ON "Biblioteca"("urlImagen");
CREATE UNIQUE INDEX "Biblioteca_urlPdf_key" ON "Biblioteca"("urlPdf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
