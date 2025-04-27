using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static BL.sevices.ICatoryBL;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryBL Icb;
        public CategoryController(ICategoryBL Ic)
        {
            this.Icb = Ic;
        }

        [HttpGet("AllCategories")]

        public List<CategorytblDTO> GetCategories()
        {
            return Icb.GetCategories();
        }

        [HttpGet("OneCategory/{id}")]

        public CategorytblDTO OneCategory(int id)
        {
            return Icb.GetCategorie(id);
        }

        [HttpDelete("DeleteCategory/{id}")]

        public bool dellCategory(int id)
        {
            return Icb.dellCategory(id);
        }

        [HttpPut("AddCategory")]

        public bool AddCategor(CategorytblDTO Category)
        {
            return Icb.AddCategory(Category);
        }

        [HttpPost("update/{id}")]

        public bool Update(int id, CategorytblDTO Category)
        {
            return Icb.Update(id, Category);
        }
    }
}
