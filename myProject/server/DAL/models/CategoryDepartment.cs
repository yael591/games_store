using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class CategoryDepartment
    {
        public CategoryDepartment()
        {
            GameDepartments = new HashSet<GameDepartment>();
        }

        public int CategoryId { get; set; }
        public string? CategoryName { get; set; }

        public virtual ICollection<GameDepartment> GameDepartments { get; set; }
    }
}
