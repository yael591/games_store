using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BL.sevices;
using DAL.models;
using DAL.sevices;
using DTO;

namespace BL.classes
{
    public class CustomerBL : ICustomerBL
    {

        ICustomerDAL Ic;
        IMapper mapper;
        public CustomerBL(ICustomerDAL i) { 
            Ic= i;
            var config = new MapperConfiguration(cfg => { cfg.AddProfile<MyProfile>(); });
            mapper = config.CreateMapper();

        }
        public bool addCustumer(CustomertblDTO c)
        {
            CustomerDepartment ct = mapper.Map<CustomertblDTO ,CustomerDepartment >(c);
            return Ic.addCustomer(ct);
        }

        public bool CustomerInThe(string name, string pass)
        {
            foreach (var item in Ic.toGetTheCustumers())
            {
                if(item.CustName==name && item.Custpass==pass)
                    return true;
            }
            return false;
        }

        public List<CustomertblDTO> toGetTheCustomer()
        {
            return mapper.Map<List<CustomerDepartment>, List<CustomertblDTO>>(Ic.toGetTheCustumers());
        }
    }
}
