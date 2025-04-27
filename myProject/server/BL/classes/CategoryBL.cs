using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL.models;
using DAL.sevices;
using DTO;
using static BL.sevices.ICatoryBL;

namespace BL.classes
{
    public class CategoryBL:ICategoryBL
    {
       
            ICategoryDAL Ic;
            IMapper mapper;
            public CategoryBL(ICategoryDAL ic)
            {
                this.Ic = ic;
                var config = new MapperConfiguration(cfg => { cfg.AddProfile<MyProfile>(); });
                mapper = config.CreateMapper();
            }

            public bool AddCategory(CategorytblDTO Category)
            {
                CategoryDepartment ct = mapper.Map<CategorytblDTO, CategoryDepartment>(Category);
                return Ic.AddCategory(ct);
            }

       
        public bool dellCategory(int id)
            {
                return Ic.dellCategory(id);

            }
            public CategorytblDTO GetCategorie(int id)
            {
          
            foreach (var item in Ic.GetCategories())
            { 
                if(item.CategoryId == id)
                    return mapper.Map<CategoryDepartment, CategorytblDTO>(item);

            }
            return null;
          
            }

            public List<CategorytblDTO> GetCategories()
            {

                return mapper.Map<List<CategoryDepartment>, List<CategorytblDTO>>(Ic.GetCategories());
            }

            public bool Update(int id, CategorytblDTO Category)
            {
                CategoryDepartment cat = mapper.Map<CategorytblDTO, CategoryDepartment>(Category);
                return Ic.Update(id, cat);
            }


        }
    }

