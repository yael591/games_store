using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;

namespace DAL.sevices
{
    public interface IDetailsBasket
    {
        public bool Add(PurchaseDetailsDepartment item);
       

        public bool dell(int id);
     

        public List<PurchaseDetailsDepartment> GetItems();
      

        public bool Update(int id, PurchaseDetailsDepartment item);
      
    }
}
