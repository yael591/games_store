using BL.sevices;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerBL iCust;
        public CustomerController(ICustomerBL bl)
        {
            iCust = bl;
        }

        [HttpPut("addCustomer")]
        public bool addCust(CustomertblDTO c)
        {
            return iCust.addCustumer(c);
        }


        [HttpPost("getIfCustHere/{name}/{pass}")]
        public bool FindCust(string name, string pass)
        {
            return iCust.CustomerInThe(name, pass);
        }
        [HttpGet("toGetAllCustomer")]
        public List<CustomertblDTO> toGet()
        {
            return iCust.toGetTheCustomer();
        }


    }
}
