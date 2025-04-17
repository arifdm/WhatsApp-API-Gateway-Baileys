-- CreateTable
CREATE TABLE "SessionFrontEnd" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "name" TEXT,

    CONSTRAINT "SessionFrontEnd_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SessionFrontEnd_sessionId_key" ON "SessionFrontEnd"("sessionId");
