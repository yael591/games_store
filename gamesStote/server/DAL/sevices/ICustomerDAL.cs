using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;

namespace DAL.sevices
{
    public interface ICustomerDAL
    {
        public bool addCustomer(CustomerDepartment c);
      

        public bool dellCustomer(int id);
        public bool Update(int id, CategoryDepartment Category);
        public List<CustomerDepartment> toGetTheCustumers();


    }
}
