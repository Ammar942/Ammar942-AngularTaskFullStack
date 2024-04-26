using AngularTaskAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace AngularTaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly DataContext _context;

        public TaskController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Task>>> GetTasks()
        {
            return Ok(await _context.Tasks.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<Task>>> CreateTask(Task task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return Ok(await _context.Tasks.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Task>>> EditTask(Task task)
        {
            var dbTask = await _context.Tasks.FindAsync(task.Id);
            if(dbTask == null)
            {
                return BadRequest("Task not found");
            }
            dbTask.Reminder = !task.Reminder;
            dbTask.Text = task.Text;
            dbTask.Day = task.Day;
            await _context.SaveChangesAsync();
            return Ok(await _context.Tasks.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Task>>> DeletTask(int id) {
            var dbTask = await _context.Tasks.FindAsync(id);
            if (dbTask == null)
            {
                return BadRequest("Task not found");
            }
            _context.Tasks.Remove(dbTask);
            await _context.SaveChangesAsync();
            return Ok(await _context.Tasks.ToListAsync());
        }


    }
}
