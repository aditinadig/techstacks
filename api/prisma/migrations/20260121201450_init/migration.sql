-- CreateTable
CREATE TABLE "Ping" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "starred" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ping_pkey" PRIMARY KEY ("id")
);
