using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleClimsPro.Models
{
    public class Patient
    {
        public int patientId { get; set; }
        public string name { get; set; }
        public string company { get; set; }
        public int age { get; set; }
        public string gender { get; set; }
        public string country { get; set; }
        public string contactPhone { get; set; }
        public string address { get; set; }
    }
}
