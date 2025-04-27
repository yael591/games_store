using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;

namespace DAL.sevices
{
    public interface IShoppingDAL
    {
     public bool addShpping(ShoppingDepartment sh);
        public List<ShoppingDepartment> GetShoppings();
        public bool Update(int id, ShoppingDepartment item);
        public bool dell(int id);

    }
}
