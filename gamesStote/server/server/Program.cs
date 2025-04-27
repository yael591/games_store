using AutoMapper;
using BL.classes;
using BL.sevices;
using DAL.classes;
using DAL.models;
using DAL.sevices;
using Microsoft.EntityFrameworkCore;
using static BL.sevices.ICatoryBL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICategoryDAL, CategorytblDAL>();
builder.Services.AddScoped<ICategoryBL, CategoryBL>();
builder.Services.AddScoped<IGameDAL, GametblDAL>();
builder.Services.AddScoped<IGameBL, GameBL>();
builder.Services.AddScoped<ICustomerDAL, CustomertblDAL>();
builder.Services.AddScoped<ICustomerBL, CustomerBL>();
builder.Services.AddScoped<IShoppingDAL, ShoppingtblDAL>();
builder.Services.AddScoped<IShppingBL, ShoppingBL>();
builder.Services.AddScoped<IDetailsBasket, DetailsBasketDAL>();
builder.Services.AddScoped<IDetailsBasketBL, DetailsBasketBL>();


//builder.Services.AddScoped<IShoppingDAL,ShoppingtblDAL>();

builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddDbContext<GameStoreContext>
   (options => options.UseSqlServer("Scaffold-DbContext \"Data Source=DESKTOP-PN2SON1\\SQLEXPRESS;Initial Catalog=GameStore;Integrated Security=True; MultipleActiveResultSets=True; Application Name=EntityFramework\" Microsoft.EntityFrameworkCore.SqlServer -OutputDir models"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    //הרשראות
    app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
}
app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
