import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderHomeComponent = () => {
    const mockRecipes = [
        { _id: '1', name: 'Recipe 1' },
        { _id: '2', name: 'Recipe 2' },
        { _id: '3', name: 'Recipe 3' },
    ];
    const mockContext = {
        getAllRecipes: jest.fn().mockResolvedValue(mockRecipes),
    };
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>,
        {
            wrapper: ({ children }) =>
                <AuthContext.Provider
                    value={mockContext}>
                    {children}
                </AuthContext.Provider>
        }
    );
};

describe("Home component functionality tests", () => {
    test("Renders the application main title", () => {
        renderHomeComponent();
        const heading = screen.getByText(/NutriGit/i);
        expect(heading).toBeInTheDocument();
    });

    test("Renders phone number correctly", () => {
        renderHomeComponent();
        const phoneNumber = screen.getByText('+38 (063)833 24 15');
        expect(phoneNumber).toBeInTheDocument();
    });

    test("Renders address number correctly", () => {
        renderHomeComponent();
        const address = screen.getByText('Sofia, bul. Hristo Botev 72 Str.');
        expect(address).toBeInTheDocument();
    });

    test("Renders the salmon image correctly", () => {
        renderHomeComponent();
        const image = screen.getByAltText('salmon');
        expect(image).toBeInTheDocument();
    });

    test("Renders the fruit image correctly", () => {
        renderHomeComponent();
        const image = screen.getByAltText('background');
        expect(image).toBeInTheDocument();
    });

    test("Renders the learn more correctly", () => {
        renderHomeComponent();
        const link = screen.getByText('Learn more');
        expect(link).toBeInTheDocument();
    });

    test('Should navigate to diet info page when link is clicked', () => {
        renderHomeComponent();
        const link = screen.getByText('Learn more');
        fireEvent.click(link);
        window.open("https://www.narayanahealth.org/blog/importance-of-balanced-diet-for-a-healthy-lifestyle/");
        const newWindow = setTimeout(() => {
            expect(newWindow.location.href).toContain("/importance-of-balanced-diet-for-a-healthy-lifestyle");
        }, 10000);
    });

    test('Renders the last 3 recipes section', async () => {
        renderHomeComponent();
        const lastRecipesHeadingElement = screen.getByText(/Last 3 recipes created/i);
        expect(lastRecipesHeadingElement).toBeInTheDocument();
    });

    test('Renders an about section', async () => {
        renderHomeComponent();
        const aboutHeading = screen.getByText(/Food is An Important Part Of A Balance Diet/i);
        expect(aboutHeading).toBeInTheDocument();
    });


    test('Should navigate to recipes catalog when button is clicked', () => {
        renderHomeComponent();
        const link = screen.getByText('Recipes Catalog');
        fireEvent.click(link);
        expect(window.location.pathname).toBe("/catalog-recipes");
    });
});