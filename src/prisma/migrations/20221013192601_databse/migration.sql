-- CreateTable
CREATE TABLE "Usuários" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bannerUrl" TEXT NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "quantidadeStoque" TEXT NOT NULL,
    "quantidadeVendidos" TEXT NOT NULL,
    "valorUnitario" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuários_email_key" ON "Usuários"("email");

-- CreateIndex
CREATE UNIQUE INDEX "login_email_key" ON "login"("email");
