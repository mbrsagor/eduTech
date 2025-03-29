# Count how many of people's join there.
def get_dashboard(self, obj):
    guard_attendee_count = GuardAttendees.objects.filter(event=obj.id).count()
    resp = {
        "guard_attendees": guard_attendee_count,
        "event_capacity": obj.event_capacity,
        "current_attendees": obj.current_attendees,
        "total_attendees": obj.total_attendees,
    }
    return resp
