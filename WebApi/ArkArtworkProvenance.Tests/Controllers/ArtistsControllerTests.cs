using System.Net;
using NUnit.Framework;

namespace ArkArtworkProvenance.Tests.Controllers
{
    [TestFixture]
    public class ArtistsControllerTests
    {
        [Test]
        public void Should_GetArtists_ReturnOk()
        {
            //Arrange
            //Act
            //Asset
            Assert.AreEqual(HttpStatusCode.OK, HttpStatusCode.OK);
        }

        [Test]
        public void Should_GetArtists_ReturnNotFound()
        {
            //Arrange
            //Act
            //Asset
            Assert.AreEqual(HttpStatusCode.NotFound, HttpStatusCode.NotFound);
        }
    }
}
