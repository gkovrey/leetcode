Select p.firstName, p.lastName, a.city, a.state
From Person p
Left JOIN Address a
ON p.personId = a.personId