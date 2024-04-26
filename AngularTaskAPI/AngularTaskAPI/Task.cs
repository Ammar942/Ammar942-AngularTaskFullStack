namespace AngularTaskAPI
{
    public class Task
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public string Day { get; set; } = string.Empty;
        public bool Reminder { get; set; }
    }
}
