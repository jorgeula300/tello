/*
  Warnings:

  - Added the required column `pais` to the `Normas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Normas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "urlImagen" TEXT NOT NULL,
    "urlDoc" TEXT NOT NULL
);
INSERT INTO "new_Normas" ("id", "titulo", "urlDoc", "urlImagen") SELECT "id", "titulo", "urlDoc", "urlImagen" FROM "Normas";
DROP TABLE "Normas";
ALTER TABLE "new_Normas" RENAME TO "Normas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
