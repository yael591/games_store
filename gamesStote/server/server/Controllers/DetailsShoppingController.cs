using BL.sevices;
using DAL.sevices;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetailsShoppingController : ControllerBase
    {

        IDetailsBasketBL Ib;
        public DetailsShoppingController(IDetailsBasketBL ib)
        {
            Ib = ib;
        }

        [HttpGet("GetShoppingDetails")]
        public List<PaurushDetailsDTO> GetPaurushDetails() { 
            return Ib.GetDeails();              
        }


        [HttpPut("addShoppings/{id}")]
        public bool addTODetails(int id, List<shoppingBasketDTO> sal)
        {
            return Ib.addTODetails(id, sal);
        }


    }
}
