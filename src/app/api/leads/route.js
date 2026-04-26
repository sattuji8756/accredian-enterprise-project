// src/app/api/leads/route.js
// Next.js API Route — stores leads in memory (replace with DB in production)

const leads = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, teamSize, message } = body;

    // Validation
    if (!name || !email || !company) {
      return Response.json(
        { success: false, error: 'Name, email and company are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      name,
      email,
      company,
      teamSize: teamSize || 'Not specified',
      message: message || '',
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log('New lead captured:', lead);

    return Response.json(
      {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ success: true, count: leads.length, leads });
}
