using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DAL.sevices;

namespace DAL.classes
{
    public class ShoppingtblDAL : IShoppingDAL
    {
        GameStoreContext DB = new GameStoreContext();
        public bool addShpping(ShoppingDepartment sh)
        {
            try
            {
                DB.ShoppingDepartments.Add(sh);
                DB.SaveChanges();
               
                return true;
            }
            catch
            {
                return false;
            }

        }
        public bool dell(int id)
        {
            try
            {
                ///מציאת האונ=ביקט למחיקה
                ShoppingDepartment i = DB.ShoppingDepartments.FirstOrDefault(o => o.ShoppingId == id);
                DB.ShoppingDepartments.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }

        public List<ShoppingDepartment> GetShoppings()
        {
            return DB.ShoppingDepartments.ToList();
        }

        public bool Update(int id, ShoppingDepartment item)
        {
            try
            {
                //עידכון
                ShoppingDepartment s1 = DB.ShoppingDepartments.FirstOrDefault(o => o.ShoppingId == id);
                DB.Entry(s1).CurrentValues.SetValues(item);
                //db.SaveChanges();
                //return true;
                //DB.ItemsTables.FirstOrDefault(i=>i.Iditem==id).Name=item.Name;
                //DB.ItemsTables.FirstOrDefault(i => i.Iditem == id).Img = item.Img;
                //DB.ItemsTables.FirstOrDefault(i => i.Iditem == id).Idcategory = item.Idcategory;
                //DB.ItemsTables.FirstOrDefault(i => i.Iditem == id).Price = item.Price;
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }
    }
}
