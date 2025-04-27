using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace BL.sevices
{
    public interface ICustomerBL
    {
        public bool addCustumer(CustomertblDTO c);
        public bool CustomerInThe(string name, string pass);

        public List<CustomertblDTO> toGetTheCustomer();
    }
}
