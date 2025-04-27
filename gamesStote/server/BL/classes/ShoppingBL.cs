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
using Microsoft.VisualBasic;

namespace BL.classes
{
    public class ShoppingBL:IShppingBL
    {
        IMapper iMapper;
        IShoppingDAL I;
        public ShoppingBL(IShoppingDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MyProfile>();
            });
            iMapper = config.CreateMapper();
        }

        public int saveShopping(ShppingDTO s)
        {
            s.ShppingDate = DateTime.Now;
            ShoppingDepartment s1 = iMapper.Map<ShppingDTO, ShoppingDepartment>(s);
            I.addShpping(s1);
            return s1.ShoppingId;
        }

        public List<ShppingDTO> GetShopping()
        {
            return iMapper.Map<List<ShoppingDepartment>, List<ShppingDTO>>(I.GetShoppings());
        }

    }
}

 
