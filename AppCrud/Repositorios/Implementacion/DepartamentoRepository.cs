


using AppCrud.Models;
using AppCrud.Repositorios.Contrato;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace AppCrud.Repositorios.Implementacion
{
    public class DepartamentoRepository : IGenericRepository<Departamento>
    {
        private readonly string _cadenaSQL = "";

        public DepartamentoRepository(IConfiguration configuration)
        {
            _cadenaSQL = configuration.GetConnectionString("cadenaSQL");
        }

        public Task<bool> Editar(Departamento modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(Departamento modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int idEmpleado)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Guardar(Departamento modelo)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Departamento>> Lista()
        {
           List<Departamento> _lista= new List<Departamento>();
           using (var conexion = new SqlConnection(_cadenaSQL))
            {
                conexion.Open();
                SqlCommand cmd = new SqlCommand("sp_ListaDepartamentos", conexion);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                using (var dr = await cmd.ExecuteReaderAsync())
                {
                    while (await dr.ReadAsync())
                    {
                        _lista.Add(new Departamento
                        {
                            idDepartamento = Convert.ToInt32(dr["idDepartamento"]),
                            nombre = dr["nombre"].ToString()
                        });
                    }
                }
            }
           return _lista;
        }
    }
}
