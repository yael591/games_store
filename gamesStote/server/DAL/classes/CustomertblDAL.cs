using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DAL.sevices;

namespace DAL.classes
{
    public class CustomertblDAL : ICustomerDAL
    {
        GameStoreContext DB = new GameStoreContext();
        public bool addCustomer(CustomerDepartment c)
        {
            try
            {
                DB.CustomerDepartments.Add(c);
                DB.SaveChanges();
                return true;
            }
            catch { return false; }
        }



        //public bool CustomerInTheDB(string name, string pass)
        //{
        //    foreach (CustomerDepartment customer in DB.CustomerDepartments)
        //    {
        //        if (customer.CustName == name && customer.Custpass == pass)
        //        {
        //            return true;
        //        }
        //    }
        //    return false;
        //}
        public bool dellCustomer(int id)
        {
            try
            {
                CustomerDepartment i = DB.CustomerDepartments.FirstOrDefault(o => o.CustId == id);
                DB.CustomerDepartments.Remove(i);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }


        public bool Update(int id, CategoryDepartment Category)
        {
            try
            {
                DB.CustomerDepartments.FirstOrDefault(i => i.CustId == id).CustName = Category.CategoryName;
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }



        public List<CustomerDepartment> toGetTheCustumers(){

            return DB.CustomerDepartments.ToList();

        }






    }
}