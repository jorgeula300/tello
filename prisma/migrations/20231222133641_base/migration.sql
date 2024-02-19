-- CreateTable
CREATE TABLE "Biblioteca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreD" TEXT NOT NULL,
    "imgLink" TEXT NOT NULL,
    "descricion" TEXT NOT NULL,
    "docLink" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Biblioteca_nombreD_key" ON "Biblioteca"("nombreD");

-- CreateIndex
CREATE UNIQUE INDEX "Biblioteca_imgLink_key" ON "Biblioteca"("imgLink");

-- CreateIndex
CREATE UNIQUE INDEX "Biblioteca_docLink_key" ON "Biblioteca"("docLink");

-- CreateIndex
CREATE UNIQUE INDEX "User_correo_key" ON "User"("correo");
