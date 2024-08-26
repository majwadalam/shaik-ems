import { EventService } from '../services/eventService.js';
import { PDFService } from '../services/pdfService.js';

const eventService = new EventService();
const pdfService = new PDFService();

export const createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getEventReport = async (req, res) => {
    try {
        const event = await eventService.getEventReport(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const pdfDoc = pdfService.generateEventReport(event);
        res.setHeader('Content-Type', 'application/pdf');
        pdfDoc.pipe(res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateEvent = async (req, res) => {
    try {
        const event = await eventService.updateEvent(req.params.id, req.body);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        await eventService.deleteEvent(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};