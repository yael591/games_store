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
using Microsoft.EntityFrameworkCore;

namespace BL.classes
{
    public class DetailsBasketBL : IDetailsBasketBL
    {
        IDetailsBasket d;
        IMapper mapper;

        public DetailsBasketBL(IDetailsBasket i)
        {
            d = i;
            var config = new MapperConfiguration(cfg => { cfg.AddProfile<MyProfile>(); });
            this.mapper = config.CreateMapper();
        }


        public bool addTODetails(int shopping, List<shoppingBasketDTO> sal)
        {
            try
            {
                
                foreach (var b in sal)
                {
                    PaurushDetailsDTO p = new PaurushDetailsDTO();
                    p.ShoppingId = shopping;
                    p.GameId = b.gameID;
                    p.Quantity = b.stockQuantity;
                    var newp=mapper.Map< PaurushDetailsDTO ,PurchaseDetailsDepartment>(p);
                    d.Add(newp);
                }
               
                return true;
            }
            catch { return false; }

        }

     
        public List<PaurushDetailsDTO> GetDeails()
        {
            return mapper.Map<List<PurchaseDetailsDepartment>, List<PaurushDetailsDTO>>(d.GetItems());

        }

     

     


      


    }
}
