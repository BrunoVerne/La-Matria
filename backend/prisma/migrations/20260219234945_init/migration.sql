-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "nacimiento" TIMESTAMP(3) NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id_servicio" SERIAL NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL,
    "duracion" INTEGER NOT NULL,
    "detalle" TEXT NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id_servicio")
);

-- CreateTable
CREATE TABLE "ClienteServicio" (
    "clienteId" INTEGER NOT NULL,
    "servicioId" INTEGER NOT NULL,
    "fechaContratacion" TIMESTAMP(3) NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "ClienteServicio_pkey" PRIMARY KEY ("clienteId","servicioId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_mail_key" ON "Cliente"("mail");

-- AddForeignKey
ALTER TABLE "ClienteServicio" ADD CONSTRAINT "ClienteServicio_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClienteServicio" ADD CONSTRAINT "ClienteServicio_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id_servicio") ON DELETE CASCADE ON UPDATE CASCADE;
