using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace BL.sevices
{
    public class ICatoryBL
    {
        public interface ICategoryBL
        {
                public bool AddCategory(CategorytblDTO Category);
                public bool dellCategory(int id);
                public CategorytblDTO GetCategorie(int id);

                public List<CategorytblDTO> GetCategories();

                public bool Update(int id, CategorytblDTO Category);
            }
        
    }
}
