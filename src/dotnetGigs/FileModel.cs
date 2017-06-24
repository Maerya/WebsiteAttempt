using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DotNetGigs
{
    public class File
    {
       [JsonPropertyAttribute("input")]
       public string input { get; set; }
    }
}
