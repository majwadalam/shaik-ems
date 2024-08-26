import PDFDocument from 'pdfkit';

export class PDFService {
    generateEventReport(event) {
        const doc = new PDFDocument();
        doc.fontSize(20).text(`Event Report: ${event.name}`, { underline: true });
        doc.moveDown();

        event.sessions.forEach((session, index) => {
            doc.fontSize(16).text(`Session ${index + 1}: ${session.title}`);
            doc.fontSize(12).text(`Speaker: ${session.speaker}`);
            doc.moveDown();
        });

        doc.moveDown();
        doc.fontSize(14).text('Participants:');
        event.participants.forEach((participant, index) => {
            doc.text(`${index + 1}. ${participant.name} (${participant.email})`);
        });

        doc.end();
        return doc;
    }
}
