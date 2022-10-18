const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
    

async function listProducts(req,res){
    try {
        const products = await prisma.produtos.findMany(
            {select:{id:true,nomeProduto:true,quantidadeStoque:true,quantidadeVendidos:true,valorUnitario:true,bannerUrl:true}})
        res.json(products)
    } catch (error) {
        return res.status(500).json(error.mensage)
    }
}
async function addProducts(req,res){
   try {
    const {bannerUrl,nomeProduto,quantidadeStoque,quantidadeVendidos,valorUnitario} = req.body;
    const produts = await prisma.produtos.create({
        data:{
            bannerUrl,
            nomeProduto,
            quantidadeStoque,
            quantidadeVendidos,
            valorUnitario
        }
    })
    return res.json(produts)
   } catch (error) {
    return res.status(500).json(error.mensage)
   }
    
}
module.exports ={
    listProducts,
    addProducts
}