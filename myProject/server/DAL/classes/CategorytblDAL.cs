using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.models;
using DAL.sevices;

namespace DAL.classes
{
    public class CategorytblDAL:ICategoryDAL
    {
            GameStoreContext DB = new GameStoreContext();

            public bool AddCategory(CategoryDepartment Category)
            {
                try
                {
                    DB.CategoryDepartments.Add(Category);
                    DB.SaveChanges();
                    return true;
                }

                catch
                {
                    return false;
                }

            }

            public bool dellCategory(int id)
            {
                try
                {
                    CategoryDepartment i = DB.CategoryDepartments.FirstOrDefault(o => o.CategoryId == id);
                    DB.CategoryDepartments.Remove(i);
                    DB.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }


            }
          

            public List<CategoryDepartment> GetCategories()
            {
                return DB.CategoryDepartments.ToList();
            }

            public bool Update(int id, CategoryDepartment Category)
            {
                try
                {
                    DB.CategoryDepartments.FirstOrDefault(i => i.CategoryId == id).CategoryName = Category.CategoryName;
                    DB.SaveChanges();
                    return true;
                }
                catch
                {
                    return false;
                }


            }



        }
    }

