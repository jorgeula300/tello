/*
  Warnings:

  - Added the required column `urlPdf` to the `RevocatoriasP` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RevocatoriasP" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pais" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "urlPdf" TEXT NOT NULL,
    "fechas" TEXT NOT NULL
);
INSERT INTO "new_RevocatoriasP" ("fechas", "id", "pais", "urlImagen") SELECT "fechas", "id", "pais", "urlImagen" FROM "RevocatoriasP";
DROP TABLE "RevocatoriasP";
ALTER TABLE "new_RevocatoriasP" RENAME TO "RevocatoriasP";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
