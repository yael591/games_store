using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.models
{
    public partial class GameStoreContext : DbContext
    {
        public GameStoreContext()
        {
        }

        public GameStoreContext(DbContextOptions<GameStoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CategoryDepartment> CategoryDepartments { get; set; } = null!;
        public virtual DbSet<CustomerDepartment> CustomerDepartments { get; set; } = null!;
        public virtual DbSet<GameDepartment> GameDepartments { get; set; } = null!;
        public virtual DbSet<PurchaseDetailsDepartment> PurchaseDetailsDepartments { get; set; } = null!;
        public virtual DbSet<ShoppingDepartment> ShoppingDepartments { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source= DESKTOP-PN2SON1\\SQLEXPRESS;Initial Catalog= GameStore;Integrated Security=True; MultipleActiveResultSets=True; Application Name=EntityFramework");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CategoryDepartment>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK__Category__19093A2B905F4764");

                entity.ToTable("CategoryDepartment");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomerDepartment>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3A89AB06D9C7");

                entity.ToTable("CustomerDepartment");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.CustCreditDetails)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CustName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Custpass)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<GameDepartment>(entity =>
            {
                entity.HasKey(e => e.GameId)
                    .HasName("PK__GameDepa__2AB897DD8791813E");

                entity.ToTable("GameDepartment");

                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.GameName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.GameDepartments)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__GameDepar__Categ__4BAC3F29");
            });

            modelBuilder.Entity<PurchaseDetailsDepartment>(entity =>
            {
                entity.HasKey(e => e.ShoppingDetailId)
                    .HasName("PK__Purchase__574EDC057A168461");

                entity.ToTable("PurchaseDetailsDepartment");

                entity.Property(e => e.ShoppingDetailId).HasColumnName("ShoppingDetailID");

                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.Property(e => e.ShoppingId).HasColumnName("ShoppingID");

                entity.HasOne(d => d.Game)
                    .WithMany(p => p.PurchaseDetailsDepartments)
                    .HasForeignKey(d => d.GameId)
                    .HasConstraintName("FK__PurchaseD__GameI__5441852A");

                entity.HasOne(d => d.Shopping)
                    .WithMany(p => p.PurchaseDetailsDepartments)
                    .HasForeignKey(d => d.ShoppingId)
                    .HasConstraintName("FK__PurchaseD__Shopp__534D60F1");
            });

            modelBuilder.Entity<ShoppingDepartment>(entity =>
            {
                entity.HasKey(e => e.ShoppingId)
                    .HasName("PK__Shopping__8E3AF538E536B453");

                entity.ToTable("ShoppingDepartment");

                entity.Property(e => e.ShoppingId).HasColumnName("ShoppingID");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.ShppingDate).HasColumnType("datetime");

                entity.Property(e => e.TotalAmount).HasColumnType("decimal(10, 2)");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ShoppingDepartments)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__ShoppingD__Custo__5070F446");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
