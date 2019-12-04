using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SampleClimsPro.Models;

namespace ClimsPro.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<Appointment> GetAppointments()
        {
            List<Appointment> lstAppointments = new List<Appointment>();
            lstAppointments.Add(new Appointment { Name = "John", City = "New York",   MobileNumber=  "467343737", AppointmentDate = DateTime.Now.ToShortDateString() });
            lstAppointments.Add(new Appointment { Name = "Peter", City = "Singapore", MobileNumber = "467343737", AppointmentDate = DateTime.Now.AddDays(1).ToShortDateString() });
            lstAppointments.Add(new Appointment { Name = "Adam", City = "Sydney",     MobileNumber = "467343737", AppointmentDate = DateTime.Now.AddDays(2).ToShortDateString() });
            return lstAppointments.AsEnumerable();
        }

        [HttpPost("[action]")]
        public void SubmitInfo([FromBody]Appointment appointments)
        {
        }

        [HttpPost("[action]")]
        public void AddPatients([FromBody]Patient appointments)
        {
        }

        [HttpGet("[action]")]
        public IEnumerable<Patient> GetPatients() {
            List<Patient> lstPatients = new List<Patient>();
            lstPatients.Add(new Patient { patientId = 5,  name = "Joseph",   company = "ABC Pte Ltd", address = "07-04,BLK 678, Xyz, 789964" });
            lstPatients.Add(new Patient { patientId = 8,  name = "Hameed",   company = "PQR Pte Ltd", address = "07-04,BLK 678, Xyz, 789962" });
            lstPatients.Add(new Patient { patientId = 16, name = "Achuthan", company = "EFG Pte Ltd", address = "07-04,BLK 678, Xyz, 789967" });
            return lstPatients.AsEnumerable();
        }

        [HttpGet("[action]")]
        public IEnumerable<Doctor> GetDoctors() {
            List<Doctor> lstDoctors = new List<Doctor>();
            lstDoctors.Add(new Doctor { doctorId = 34, name = "Sam", address = "07-04,BLK 678, Xyz, 789967" });
            lstDoctors.Add(new Doctor { doctorId = 14, name = "Ben", address = "07-04,BLK 678, Xyz, 789967" });
            lstDoctors.Add(new Doctor { doctorId = 22, name = "Brian", address = "07-04,BLK 678, Xyz, 789967" });
            return lstDoctors.AsEnumerable();
        }
    }
}