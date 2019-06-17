import { Context } from "../context";

describe('Context', () => {

    it('passes a test', () => {
        let ctx = new Context();
        expect(ctx.initialized).toBe(false);
        ctx.init();
        expect(ctx.initialized).toBe(true, 'Expected to have been initialized.');
    });
});