using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DotNetGigs
{
    public class Parcer
    {
        String[] fileHolder = {"test123"};
       public void setFile(String[] file)
        {
           this.fileHolder = file;
        }
        public String[] returnFile()
        {
            return this.fileHolder;
        }
    }
}
