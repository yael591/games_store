using BL.sevices;
using DAL.models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingsController : ControllerBase
    {
        IShppingBL shpping;
        public ShoppingsController(IShppingBL shppi)
        {
            this.shpping = shppi;
        }

        [HttpGet("getAllTheShopping")]
        public List<ShppingDTO> getAllTheShopping()
        {
            return shpping.GetShopping();
        }


        [HttpPut("addShopping")]
        public int add(ShppingDTO s) { 
          return  shpping.saveShopping(s);
        }
    }
}
