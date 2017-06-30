using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using DotNetGigs;

namespace DotNetGigs
{
    public class Parcer
    {
        File fileHolder;
       public void setFile(Object file)
        {
           this.fileHolder = JsonConvert.DeserializeObject<File>(file.ToString());
           Console.WriteLine(this.fileHolder.input);
        }
        public Object returnFile()
        {
            return this.fileHolder;
        }
    }
}
