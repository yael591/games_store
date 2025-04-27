using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DAL.sevices;

namespace DAL.classes
{
    public class DetailsBasketDAL:IDetailsBasket
    {
        GameStoreContext DB = new GameStoreContext();
        public bool Add(PurchaseDetailsDepartment item)
        {
            //פונקציה שמכניסה למסד נתונים
            try
            {
                DB.PurchaseDetailsDepartments.Add(item);
                //הולכת ומשנה במסד
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
                PurchaseDetailsDepartment i = DB.PurchaseDetailsDepartments.FirstOrDefault(o => o.GameId == id);
                DB.PurchaseDetailsDepartments.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }

        public List<PurchaseDetailsDepartment> GetItems()
        {
            //Include(j => j.IdcategoryNavigation)-לא לשכוח לצרף
            return DB.PurchaseDetailsDepartments.ToList();
        }

        public bool Update(int id, PurchaseDetailsDepartment item)
        {
            try
            {
                //עידכון
                PurchaseDetailsDepartment c1 = DB.PurchaseDetailsDepartments.FirstOrDefault(o => o.GameId == id);
                DB.Entry(c1).CurrentValues.SetValues(item);
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
