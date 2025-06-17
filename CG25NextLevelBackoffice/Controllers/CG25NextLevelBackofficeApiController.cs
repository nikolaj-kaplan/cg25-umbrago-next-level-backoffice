using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CG25NextLevelBackoffice.Controllers
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "CG25NextLevelBackoffice")]
    public class CG25NextLevelBackofficeApiController : CG25NextLevelBackofficeApiControllerBase
    {

        [HttpGet("ping")]
        [ProducesResponseType<string>(StatusCodes.Status200OK)]
        public string Ping() => "Pong";
    }
}
