using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL.models;


namespace DTO
{
    public class MyProfile:Profile
    {
        public MyProfile()
        {
            CreateMap<CategorytblDTO, CategoryDepartment>();
            CreateMap<CategoryDepartment, CategorytblDTO>();

            CreateMap<GameDepartment, GametblDTO>();
            CreateMap<GametblDTO, GameDepartment>();

            CreateMap<CustomerDepartment, CustomertblDTO>();
            CreateMap<CustomertblDTO, CustomerDepartment>();

            CreateMap<ShoppingDepartment, ShppingDTO>();
            CreateMap<ShppingDTO, ShoppingDepartment> ();


            CreateMap<PurchaseDetailsDepartment,PaurushDetailsDTO>();
            CreateMap<PaurushDetailsDTO, PurchaseDetailsDepartment>();


        }
    }
}
