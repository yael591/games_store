using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;

namespace DAL.sevices
{
    public interface ICategoryDAL
    {
        public bool AddCategory(CategoryDepartment Category);
        public bool dellCategory(int id);
  

        public List<CategoryDepartment> GetCategories();

        public bool Update(int id, CategoryDepartment Category);
    }
}
