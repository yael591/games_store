using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DTO;

namespace BL.sevices
{
    public interface IDetailsBasketBL
    {
        public bool addTODetails(int shopping, List<shoppingBasketDTO> sal);



        public List<PaurushDetailsDTO> GetDeails();





       
    }
}
